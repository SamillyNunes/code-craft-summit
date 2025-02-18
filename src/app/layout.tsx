import './globals.css';

import type { Metadata } from 'next';
import { Montserrat, Oxanium } from 'next/font/google';

export const metadata: Metadata = {
	title: 'CodeCraft Summit 2025',
	description: 'The biggest technology event of 2025.',
};

const oxanium = Oxanium({
	weight: ['500', '600'],
	subsets: ['latin'], //quais caracteres eu quero
	variable: '--font-oxanium',
});

const montserrat = Montserrat({
	weight: ['400', '600'],
	subsets: ['latin'], //quais caracteres eu quero
	variable: '--font-montserrat', //nome que vai ser identificado pelo tailwind
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			{/* o antialiased eh para que os navegadores renderizem melhor */}
			<body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
				<main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
					{children}
				</main>
			</body>
		</html>
	);
}
