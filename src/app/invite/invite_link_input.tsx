import { IconButton } from '@/components/icon_button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { Copy, Link } from 'lucide-react';

export function InviteLinkInput() {
	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField
				defaultValue={'http://localhost:3000/invite/64841262se62'}
				readOnly
			/>

			<IconButton className="-mr-2">
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
}
