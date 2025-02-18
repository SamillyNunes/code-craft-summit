import type { LucideProps } from 'lucide-react';

interface InfoCardProps {
	value: string;
	label: string;
	icon?: React.ComponentType<LucideProps>;
}

export function InfoCard({ value, label, icon: IconComponent }: InfoCardProps) {
	return (
		<div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
			<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
				{value}
			</span>
			<span className="text-sm text-gray-300 leading-none text-center">
				{label}
			</span>

			{IconComponent && (
				<IconComponent className="size-5 text-purple absolute top-3 left-3" />
			)}
		</div>
	);
}
