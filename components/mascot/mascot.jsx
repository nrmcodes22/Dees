import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// ==========================================================
// TUNABLE POSITIONS
// Percentages are relative to the sprite's own box (0–100),
// sampled directly from the body PNG. Nudge if things drift.
// ==========================================================
const SPRITE_SRC = "/images/icons/mascot.png"; // body sprite, put in /public

const BODY_FILL = "#FBF7EF"; // sampled body color, paints over the printed eyes+mouth
const INK = "#570202"; // eye/mouth ink color

const LEFT_EYE = { x: 36.0, y: 47.5 };
const RIGHT_EYE = { x: 53.8, y: 46.6 };
const MOUTH = { x: 46.2, y: 59.7 };

const EYE_COVER = { w: 11, h: 22 };
const EYE_SIZE = { w: 8, h: 18 };
const MOUTH_COVER = { w: 14, h: 8 };

// --- Limb sprite attachment points --------------------------------
// x / y: where the limb's pivot (shoulder / hip) sits on the BODY,
// as a % of the body box.
// width: how wide the limb sprite renders, as a % of the body box width.
// originX/Y: pivot point WITHIN the limb's own image (0–100%). Most
// arm/leg cutouts pivot from the top-center where they meet the body,
// so "50% 0%" is a good default — change it if your art's socket
// point sits elsewhere in the image.
const LEFT_ARM = { x: 14, y: 58, width: 22, originX: "60%", originY: "10%" };
const RIGHT_ARM = { x: 86, y: 58, width: 22, originX: "40%", originY: "10%" };
const LEFT_LEG = { x: 38, y: 88, width: 20, originX: "50%", originY: "0%" };
const RIGHT_LEG = { x: 62, y: 88, width: 20, originX: "50%", originY: "0%" };

// Limbs now sit still until the mascot is hovered — no idle sway/float.
function Limb({ src, spot, hoverKeyframes, contactHovered, delay = 0 }) {
  if (!src) return null;
  return (
    <motion.img
      src={src}
      alt=""
      draggable={false}
      className="absolute select-none pointer-events-none"
      style={{
        left: `${spot.x}%`,
        top: `${spot.y}%`,
        width: `${spot.width}%`,
        transform: "translate(-50%, -50%)",
        transformOrigin: `${spot.originX} ${spot.originY}`,
      }}
      animate={contactHovered ? hoverKeyframes : { rotate: 0 }}
      transition={
        contactHovered
          ? { duration: 0.7, ease: "easeInOut", delay }
          : { duration: 0.3, ease: "easeOut" }
      }
    />
  );
}

function Mascot({
  contactHovered = false,
  armLeftSrc,
  armRightSrc,
  legLeftSrc,
  legRightSrc,
}) {
  const mascotRef = useRef(null);
  const eyeLRef = useRef(null);
  const eyeRRef = useRef(null);

  const [cursorOutside, setCursorOutside] = useState(false);

  // ----------------------------------------
  // Eye tracking
  // ----------------------------------------
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorOutside(false);

      const mascot = mascotRef.current;
      if (!mascot) return;

      const rect = mascot.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = Math.max(-1, Math.min(1, (event.clientX - cx) / 260));
      const dy = Math.max(-1, Math.min(1, (event.clientY - cy) / 260));

      const x = dx * 3;
      const y = dy * 2;

      if (eyeLRef.current) eyeLRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (eyeRRef.current) eyeRRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => setCursorOutside(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={mascotRef}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        hidden
        md:block
        absolute
        right-[8%]
        bottom-[clamp(210px,16vw,300px)]
        z-20
        h-[clamp(260px,24vw,420px)]
        w-[clamp(260px,24vw,420px)]
        pointer-events-none
      "
    >
      <div className="relative h-full w-full">
        {/* =====================================
            GROUND SHADOW (static)
        ===================================== */}
        <div
          className="
            absolute
            left-1/2
            bottom-[7px]
            -translate-x-1/2
            h-[9px]
            w-[70px]
            rounded-[50%]
            bg-black/25
            blur-[4px]
          "
        />

        {/* =====================================
            LEGS (render behind the body so the
            hips tuck under the torso art)
        ===================================== */}
        <Limb
          src={legLeftSrc}
          spot={LEFT_LEG}
          contactHovered={contactHovered}
          hoverKeyframes={{ rotate: [0, -6, 4, 0] }}
        />
        <Limb
          src={legRightSrc}
          spot={RIGHT_LEG}
          contactHovered={contactHovered}
          hoverKeyframes={{ rotate: [0, 6, -4, 0] }}
          delay={0.1}
        />

        {/* =====================================
            SPRITE BODY
        ===================================== */}
        <img
          src={SPRITE_SRC}
          alt=""
          draggable={false}
          className="relative z-10 block h-full w-full select-none object-contain"
        />

        {/* =====================================
            ARMS (render above the body)
        ===================================== */}
        <Limb
          src={armLeftSrc}
          spot={LEFT_ARM}
          contactHovered={contactHovered}
          hoverKeyframes={{ rotate: [-5, 10, -4, 0] }}
        />
        <Limb
          src={armRightSrc}
          spot={RIGHT_ARM}
          contactHovered={contactHovered}
          hoverKeyframes={{ rotate: [0, -10, 5, 0] }}
          delay={0.1}
        />

        {/* =====================================
            EYE COVER PATCHES
        ===================================== */}
        <div
          className="absolute z-20 rounded-[50%]"
          style={{
            left: `${LEFT_EYE.x}%`,
            top: `${LEFT_EYE.y}%`,
            width: `${EYE_COVER.w}%`,
            height: `${EYE_COVER.h}%`,
            transform: "translate(-50%, -50%)",
            background: BODY_FILL,
          }}
        />
        <div
          className="absolute z-20 rounded-[50%]"
          style={{
            left: `${RIGHT_EYE.x}%`,
            top: `${RIGHT_EYE.y}%`,
            width: `${EYE_COVER.w}%`,
            height: `${EYE_COVER.h}%`,
            transform: "translate(-50%, -50%)",
            background: BODY_FILL,
          }}
        />

        {/* =====================================
            MOUTH COVER PATCH
        ===================================== */}
        <div
          className="absolute z-20"
          style={{
            left: `${MOUTH.x}%`,
            top: `${MOUTH.y}%`,
            width: `${MOUTH_COVER.w}%`,
            height: `${MOUTH_COVER.h}%`,
            transform: "translate(-50%, -50%)",
            background: BODY_FILL,
          }}
        />

        {/* =====================================
            LEFT EYE (trackable)
        ===================================== */}
        <div
          ref={eyeLRef}
          className="absolute z-30 rounded-[50%]"
          style={{
            left: `${LEFT_EYE.x}%`,
            top: `${LEFT_EYE.y}%`,
            width: `${EYE_SIZE.w}%`,
            height: `${EYE_SIZE.h}%`,
            marginLeft: `-${EYE_SIZE.w / 2}%`,
            marginTop: `-${EYE_SIZE.h / 2}%`,
            background: INK,
          }}
        >
          <span
            className="absolute rounded-[50%] bg-white"
            style={{ width: "35%", height: "30%", top: "18%", left: "28%" }}
          />
          <span
            className="absolute rounded-[50%] bg-white"
            style={{ width: "16%", height: "12%", top: "58%", left: "36%" }}
          />
        </div>

        {/* =====================================
            RIGHT EYE (trackable)
        ===================================== */}
        <div
          ref={eyeRRef}
          className="absolute z-30 rounded-[50%]"
          style={{
            left: `${RIGHT_EYE.x}%`,
            top: `${RIGHT_EYE.y}%`,
            width: `${EYE_SIZE.w}%`,
            height: `${EYE_SIZE.h}%`,
            marginLeft: `-${EYE_SIZE.w / 2}%`,
            marginTop: `-${EYE_SIZE.h / 2}%`,
            background: INK,
          }}
        >
          <span
            className="absolute rounded-[50%] bg-white"
            style={{ width: "35%", height: "30%", top: "18%", left: "28%" }}
          />
          <span
            className="absolute rounded-[50%] bg-white"
            style={{ width: "16%", height: "12%", top: "58%", left: "36%" }}
          />
        </div>

        {/* =====================================
            MOUTH (swaps smile / neutral)
        ===================================== */}
        <svg
          className="absolute z-30 overflow-visible"
          style={{
            left: `${MOUTH.x}%`,
            top: `${MOUTH.y}%`,
            width: `${MOUTH_COVER.w}%`,
            transform: "translate(-50%, -50%)",
          }}
          viewBox="0 0 40 20"
        >
          {!cursorOutside ? (
            <path d="M6 8 Q20 20 34 8" stroke={INK} strokeWidth="3.2" strokeLinecap="round" fill="none" />
          ) : (
            <path d="M6 14 Q20 4 34 14" stroke={INK} strokeWidth="3.2" strokeLinecap="round" fill="none" />
          )}
        </svg>
      </div>
    </motion.div>
  );
}

export default Mascot;