import Image from 'next/image';

interface RankingCardProps {
	value: string;
	position: string;
	personName: string;
	imgUrl: string;
}

export function RankingCard(props: RankingCardProps) {
	return (
		<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
			<span className="text-sm text-gray-300 leading-none">
				<span className="font-semibold">{props.position}</span> |{' '}
				{props.personName}
			</span>
			<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
				{props.value}
			</span>

			<Image
				src={props.imgUrl}
				alt="Ícone de medalha de ouro"
				className="absolute top-0 right-8"
			/>
		</div>
	);
}
