'use client';

import { IconButton } from '@/components/icon_button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { Copy, Link } from 'lucide-react';

interface InviteLinkInputProps {
	inviteLink: string;
}

// Sempre que uma parte da minha pagina precisa ser renderizado no cliente,
// recomenda-se componentiza-lo para evitar que mais componentes sejam renderizados no cliente
// ja que isso diminui a performance
export function InviteLinkInput(props: InviteLinkInputProps) {
	function copyInviteLink() {
		navigator.clipboard.writeText(props.inviteLink);
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField defaultValue={props.inviteLink} readOnly />

			<IconButton className="-mr-2" onClick={copyInviteLink}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
}
