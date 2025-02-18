import { MailIcon } from "lucide-react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> { }

export function Input(props: InputProps) {
    return (
        <div className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100">
            {/* esse group vai definir que, quando o meu grupo (no caso a div) estiver com foco, faca isso... */}
            {/* o comando "group-[&:not(:has(input:placeholder-shown))]" vai dizer que, se o input nao tiver mostrando o placeholder, no grupo, vai fazer o que diz depois dos dois pontos */}
            <span
                className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100"
            >
                <MailIcon />
            </span>
            <input
                className="flex-1 outline-0 placeholder-gray-400"
                {...props}
            />
        </div>
    );
}