import { InfoCard } from '@/components/info_card';
import {
	getSubscriberInviteClicks,
	getSubscriberInviteCount,
} from '@/http/api';
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';

interface StatsProps {
	subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
	const { count: inviteClicks } = await getSubscriberInviteClicks(subscriberId);
	const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);

	return (
		<div className="grid gap-3 md:grid-cols-3">
			<InfoCard
				value={inviteClicks.toString()}
				label="Acessos ao link"
				icon={MousePointerClick}
			/>
			<InfoCard
				value={inviteCount.toString()}
				label="Inscrições feitas"
				icon={BadgeCheck}
			/>
			<InfoCard value="3°" label="Posição no ranking" icon={Medal} />
		</div>
	);
}
