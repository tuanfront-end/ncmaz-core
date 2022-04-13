import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";

export default function Save(props) {
	const { attributes } = props;
	const {
		hasBackground,
		headingSmallText,
		heading,
		description,
		buttonText,
		buttonHref,
		mediaUrl,
		mediaId,
		mediaSrcSet,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`relative ${hasBackground ? "py-16" : ""}`}>
				{hasBackground && <BackgroundSection />}

				<SectionBecomeAnAuthor
					heading={heading}
					description={description}
					smallText={headingSmallText}
					buttonHref={buttonHref}
					buttonText={buttonText}
					rightImg={mediaUrl}
					rightImgMediaSrcSet={mediaSrcSet}
				/>
			</div>
		</div>
	);
}
