import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";

export default function save(props) {
	const { attributes } = props;
	const {
		hasBackground,
		headingSmallText,
		heading,
		description,
		buttonText,
		buttonHref,
		rightImg,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="container relative">
				{hasBackground && <BackgroundSection />}

				<SectionBecomeAnAuthor
					heading={heading}
					description={description}
					smallText={headingSmallText}
					buttonHref={buttonHref}
					buttonText={buttonText}
					rightImg={rightImg}
				/>
			</div>
		</div>
	);
}
