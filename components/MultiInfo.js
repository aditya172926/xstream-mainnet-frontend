import Image from "next/image";

export function InfoTile( title, info, avatar1, avatar2 ){
    return (
        <div className="grid-sub min-h-[170px]">
            <span className="grid-sub-title">{title}</span>
            <span className="grid-sub-info">{info}</span>
            <div className="flex items-center justify-center mt-4">
                <div className="shadow-[#cccccc40] shadow-[0px_0px_6px_3px_rgb(204,204,204,0.25)] flex items-center justify-between w-30 px-1 py-1 rounded-xl">
                    <Image
                        src={avatar1}
                        alt="send stream image"
                        className="w-8 p-1 rounded-xl"
                    />
                    <div className="flex flex-col w-20 rounded-xl p-1 ">
                        <div className="bg-[#12141e1c] h-2 w-full content-none mb-1 rounded-lg"></div>
                        <div className="bg-[#12141e1c] h-2 w-1/2 content-none rounded-lg"></div>
                    </div>
                </div>
                <span className="p-[6px] bg-[#10bb3514] rounded-xl mx-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        className="fill-[#10bb35]"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M9,17H6c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1C10,16.55,9.55,17,9,17z M9,13H6 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1C10,12.55,9.55,13,9,13z M9,9H6C5.45,9,5,8.55,5,8c0-0.55,0.45-1,1-1h3 c0.55,0,1,0.45,1,1C10,8.55,9.55,9,9,9z M18.7,11.12l-3.17,3.17c-0.39,0.39-1.03,0.39-1.42,0l-1.41-1.42 c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71l2.47-2.47c0.39-0.39,1.02-0.39,1.41,0l0.01,0.01 C19.09,10.1,19.09,10.74,18.7,11.12z"
                                    fill-rule="evenodd"
                                />
                            </g>
                        </g>
                    </svg>
                </span>
                <div className=" shadow-[#cccccc40] shadow-xl flex items-center justify-between w-30 px-1 py-1 rounded-xl">
                    <Image
                        src={avatar2}
                        alt="send stream image"
                        className="w-8 p-1 rounded-xl"
                    />
                    <div className="flex flex-col w-20 rounded-xl p-1 ">
                        <div className="bg-[#12141e1c] h-2 w-full content-none mb-1 rounded-xl"></div>
                        <div className="bg-[#12141e1c] h-2 w-1/2 content-none rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MultiInfo({dataArr}){
    dataArr.map((data) => {
        return (
            <InfoTile key={data.title} title={data.title} info={data.info} avatar1={data.avatar1} avatar2={data.avatar2} />
        )
    })

}