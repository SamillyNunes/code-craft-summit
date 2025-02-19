import { getRanking } from '@/http/api';
import medalCooper from '../../../assets/medal_cooper.svg';
import medalGold from '../../../assets/medal_gold.svg';
import medalSilver from '../../../assets/medal_silver.svg';
import { RankingCard } from './ranking_card';

export async function Ranking() {
	const { ranking } = await getRanking();

	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				{ranking.map((r, index) => (
					<RankingCard
						key={r.id}
						position={`${index + 1}°`}
						personName={r.name}
						value={r.score.toString()}
						imgUrl={
							index === 0 ? medalGold : index === 1 ? medalSilver : medalCooper
						}
					/>
				))}
			</div>
		</div>
	);
}
