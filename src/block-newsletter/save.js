import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import Badge from "../frontend-components/Badge/Badge";

export default function save(props) {
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
								<li className="flex items-center space-x-4">
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
						<form className="nc-SectionSubscribe2__my-form-wrap hidden mt-10 relative max-w-sm">
							<input
								type="email"
								className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-full text-sm font-normal h-11 px-4 py-3"
								required
								aria-required="true"
								placeholder="Enter your email"
							/>
							<button
								className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
								type="submit"
							>
								<i className="las la-arrow-right text-xl"></i>
							</button>
						</form>
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
