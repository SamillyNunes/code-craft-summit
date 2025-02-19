import { InfoCard } from '@/components/info_card';
import { getSubscriberInviteClicks } from '@/http/api';
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';

interface StatsProps {
	subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
	const { count } = await getSubscriberInviteClicks(subscriberId);

	return (
		<div className="grid gap-3 md:grid-cols-3">
			<InfoCard
				value={count.toString()}
				label="Acessos ao link"
				icon={MousePointerClick}
			/>
			<InfoCard value="432" label="Inscrições feitas" icon={BadgeCheck} />
			<InfoCard value="3°" label="Posição no ranking" icon={Medal} />
		</div>
	);
}
