import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import Badge from "../frontend-components/Badge/Badge";

export default function Save(props) {
	const { attributes } = props;
	const {
		hasBackground,
		heading,
		subHeading,
		descLists,
		mediaUrl,
		mediaId,
		mediaSrcSet,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={hasBackground ? "relative py-16" : ""}>
				{hasBackground && <BackgroundSection />}
				<div
					className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center `}
					data-nc-id="SectionSubscribe2"
				>
					<div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
						<h2 className="font-semibold text-4xl">{heading}</h2>
						<span className="block mt-6 text-neutral-500 dark:text-neutral-400">
							{subHeading}
						</span>
						<ul className="space-y-5 !mt-10">
							{descLists.map((item, index) => (
								<li key={index} className="flex items-center space-x-4">
									<Badge
										color={index % 2 === 0 ? "pink" : "green"}
										name={`0${index + 1}`}
									/>
									<span className="font-medium text-neutral-700 dark:text-neutral-300">
										{item}
									</span>
								</li>
							))}
						</ul>
						<div className="nc-SectionSubscribe2__shortcode-wrap mt-10 relative max-w-sm">
							<InnerBlocks.Content />
						</div>
					</div>
					<div className="flex-grow">
						{mediaUrl ? (
							!!mediaSrcSet ? (
								<img
									srcSet={mediaSrcSet}
									src={mediaUrl}
									className="w-full"
									sizes="(max-width: 1297px) 100vw, 1297px"
									alt="newsletter right image"
								/>
							) : (
								<img
									src={mediaUrl}
									className="w-full"
									alt="newsletter right image"
								/>
							)
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
