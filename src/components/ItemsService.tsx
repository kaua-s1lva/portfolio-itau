import Image, { StaticImageData } from "next/image"

type Props = {
    image: StaticImageData;
    description: string;
}

export function ItemsService ( { image, description }:Props ) {
    return (
        <>
            <li className="flex items-center gap-10 pb-9 border-b-[1px]">
                <div className="flex w-7 h-7 items-center justify-center">
                    <Image src={image} alt="icon" />
                </div>
                <p className="flex-1 text-txt-gray pr-2">{description}</p>
            </li>
        </>
    )
}