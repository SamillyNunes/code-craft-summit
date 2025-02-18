import { ComponentProps, ReactNode } from "react";

// Aqui estamos extendendo todas as props padrao de um button para nao ter que especificar manualmente
// Nesse caso tambem nao precisamos especificar children, ja que esta eh uma propriedade que tambem vem nas props de button
interface ButtonProps extends ComponentProps<'button'>{};

export default function Button(props: ButtonProps) {
    return (
        <button 
            className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            {...props}
        />
    );
}