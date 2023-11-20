import Image from "next/image";

import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'

export function Header () {
    return (
        <header className="bg-primary-orange text-white py-2 flex justify-center gap-72 items-center">
            <div>
                <ul className="flex gap-20 items-center">
                    <li><Image src={Logo} alt="Logo" height={48}/></li>
                    <li>
                        <ItemMenu name="Para você"/>
                    </li>
                    <li>
                        <ItemMenu name="Para empresas"/>
                    </li>
                    <li>
                        <ItemMenu name="Serviços"/>
                    </li>
                    <li>
                        <ItemMenu name="Ajuda"/>
                    </li>
                </ul>

            </div>
            <div className="flex items-center">
                <Search />
            </div>
            <div className="absolute top-0 right-0">
                <button className="flex items-center gap-4 bg-primary-blue p-5">
                    <Image src={IconUser} alt="Icon User" />
                    <span>Acessa conta</span>
                </button>

            </div>
        </header>
    )
}