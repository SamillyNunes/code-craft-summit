import { IconButton } from '@/components/icon_button';
import { InfoCard } from '@/components/info_card';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react';
import Image from 'next/image';

import logo from '../../assets/logo.svg';
import medalCooper from '../../assets/medal_cooper.svg';
import medalGold from '../../assets/medal_gold.svg';
import medalSilver from '../../assets/medal_silver.svg';

export default function InvitePage() {
	return (
		<div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
			<div className="flex flex-col gap-10 w-full max-w-[550px]">
				<Image src={logo} alt="Logo DevStage" width={108.5} height={30} />

				<div className="space-y-2">
					<h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
						Inscrição confirmada!
					</h1>
					<p className="text-gray-300">
						Para entrar no evento, acesse o link enviado para seu e-mail.
					</p>
				</div>

				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
							Indique e ganhe
						</h2>
						<p className="text-gray-300">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
					</div>

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

					<div className="grid gap-3 md:grid-cols-3">
						<InfoCard
							value="1042"
							label="Acessos ao link"
							icon={MousePointerClick}
						/>
						<InfoCard value="432" label="Inscrições feitas" icon={BadgeCheck} />
						<InfoCard value="3°" label="Posição no ranking" icon={Medal} />
					</div>
				</div>
			</div>

			<div className="w-full max-w-[440px] space-y-5">
				<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
					Ranking de indicações
				</h2>

				<div className="space-y-4">
					<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
						<span className="text-sm text-gray-300 leading-none">
							<span className="font-semibold">1°</span> | Samilly Nunes
						</span>
						<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
							1030
						</span>

						<Image
							src={medalGold}
							alt="Ícone de medalha de ouro"
							className="absolute top-0 right-8"
						/>
					</div>

					<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
						<span className="text-sm text-gray-300 leading-none">
							<span className="font-semibold">2°</span> | Leonardo Nunes
						</span>
						<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
							1030
						</span>

						<Image
							src={medalSilver}
							alt="Ícone de medalha de ouro"
							className="absolute top-0 right-8"
						/>
					</div>

					<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
						<span className="text-sm text-gray-300 leading-none">
							<span className="font-semibold">3°</span> | Ótavio Nunes
						</span>
						<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
							1030
						</span>

						<Image
							src={medalCooper}
							alt="Ícone de medalha de ouro"
							className="absolute top-0 right-8"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
