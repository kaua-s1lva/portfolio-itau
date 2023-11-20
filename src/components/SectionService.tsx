import { Container } from "./Container"
import { ItemsService } from "./ItemsService"
import Image from "next/image"

import PhoneIcon from '@/assets/icon-phone.svg'
import SolutionsIcon from '@/assets/icon-solutions.svg'
import OptionIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'
import ImagePhone from '@/assets/phone.png'

export function SectionService () {
    return (
        <section className="relative w-full h-[956px] ">
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9 mt-[50px]">serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold mb-6 leading-tight">
                        Gerencie suas finanças sem sair de casa
                    </h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">
                        Veja como você pode cuidar das suas finanças pelo app itaú de forma segura, rápida e o melhor, 
                        no conforto da sua casa.
                    </p>
                    <ul className="flex flex-col items-start gap-9">
                        <ItemsService image={PhoneIcon} description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"/>
                        <ItemsService image={SolutionsIcon} description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"/>
                        <ItemsService image={OptionIcon} description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"/>
                        <ItemsService image={CardIcon} description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"/>
                    </ul>
                </div>

            </Container>
            <div className="absolute top-0 right-0 w-[32%] h-full bg-gray-phone flex items-center">
                <Image src={ImagePhone} alt='phone' className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}