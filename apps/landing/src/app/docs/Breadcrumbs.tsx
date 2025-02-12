'use client';

import { CaretRight } from '@phosphor-icons/react';
import { useParams } from 'next/navigation';
import { toTitleCase } from '~/utils/util';

export function Breadcrumbs() {
	const { slug } = useParams<{ slug?: string[] }>();
	if (!slug) return null;

	return (
		<div className="flex flex-row items-center gap-1">
			{slug.map((item, index) => (
				<>
					{index > 0 && <CaretRight className="h-4 w-4" />}
					<span className="px-1 text-sm">{toTitleCase(item)}</span>
				</>
			))}
		</div>
	);
}
