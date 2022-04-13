import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";

export default function Save(props) {
	const { attributes } = props;
	const { hasBackground, heading, videoIds, subHeading } = attributes;
	const variable = {
		settings: { hasBackground, heading, subHeading, videoIds },
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-videos"
			data-nc-gutenberg-section-api={JSON.stringify(variable)}
		></div>
	);
}
