import medalCooper from '../../../assets/medal_cooper.svg';
import medalGold from '../../../assets/medal_gold.svg';
import medalSilver from '../../../assets/medal_silver.svg';
import { RankingCard } from './ranking_card';

export function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				<RankingCard
					position="1°"
					personName="Samilly Nunes"
					value="1030"
					imgUrl={medalGold}
				/>
				<RankingCard
					position="2°"
					personName="Leonardo Nunes"
					value="588"
					imgUrl={medalSilver}
				/>
				<RankingCard
					position="3°"
					personName="Izabele Nunes"
					value="34"
					imgUrl={medalCooper}
				/>
			</div>
		</div>
	);
}
