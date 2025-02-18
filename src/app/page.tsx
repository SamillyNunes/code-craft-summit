import Image from 'next/image';
import logo from '../assets/logo.svg';

export default function Home() {
	return (
		<main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
			<div className="min-h-dvh flex flex-col justify-center gap-16">
				<div className="flex flex-col gap-8 items-center md:items-start">
					<Image src={logo} alt="Logo DevStage" width={108.5} height={30} />

					<h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
						<span className="text-blue">CodeCraft</span>
						Summit 2025
					</h1>
				</div>
			</div>
		</main>
	);
}
