"use client"
import react from "react"
export default function grid(){
    return (
        <section className="md:hidden pb-[34px] bg-white">
            <div className="flex flex-col gap-2 w-full h-[200vw] max-h-[1000px] px-4">

                <div className="flex gap-1 w-full h-[34%]">
                <div className="bg-blue-500 flex-1 h-full rounded-[6px] relative overflow-hidden">
                    <img
                        src="/images/about/read.jpg"
                        alt="Read"
                        className=" h-full object-cover"
                        />
                <p className="absolute bottom-2 left-2 text-white text-sm">
                    I read!
                </p>
                </div>
                <div className="rounded-[6px] relative overflow-hidden bg-blue-500 flex-1 h-full">
                    <img
                                src="/images/about/frame4.jpg"
                                alt="Chess"
                                className="h-full object-cover"
                            />
                            <p className="absolute bottom-2 left-2 text-white text-sm">
                                    Chess..
                            </p>
                </div>
                </div>

                <div className="rounded-[6px] relative overflow-hidden flex  w-full bg-green-500 h-[19%]">
                    <img
                        src="/images/about/cycling.jpg"
                        alt="Cycling"
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute bottom-2 left-2 text-white text-sm">
                        Cycling..
                    </p>
                </div>

                <div className="flex  gap-1  w-full  h-[40%] ">
                <div className="rounded-[6px] relative overflow-hidden flex-1 bg-purple-500">
                    <img
                        src="/images/about/write.jpg"
                        alt="Write"
                        className="h-full w-full object-cover object-right-top"
                        />
                        <p className="absolute bottom-2 left-2 text-white text-sm">
                        I write!
                         </p>
                </div>
                <div className="rounded-[6px] relative overflow-hidden flex-1 bg-purple-500">
                    <img
                                src="/images/about/content.jpg"
                                alt="Content"
                                className="w-full h-full object-cover"
                                />
                            <p className="absolute bottom-2 left-2 text-white text-sm">
                                Content Creation..
                            </p>
                </div>
                </div>

            </div>
</section>

    )
}