import { Button } from '@/components/button';
import { IconButton } from '@/components/icon_button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { ArrowRight, CopyIcon, MailIcon } from 'lucide-react';

export default function Home() {
	return (
		<main>
			<Button>
				Enviar
				<ArrowRight />
			</Button>

			<IconButton>
				<CopyIcon />
			</IconButton>

			<div>
				{/* tecnica do composition pattern: da mais flexibilidade e escalabilidade */}
				<InputRoot>
					<InputIcon>
						<MailIcon size={20} />
					</InputIcon>

					<InputField placeholder="Digite o email" />
				</InputRoot>
			</div>
		</main>
	);
}
