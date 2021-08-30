import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	TextControl,
	TextareaControl,
} from "@wordpress/components";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	//
	const {
		hasBackground,
		headingSmallText,
		heading,
		description,
		buttonText,
		buttonHref,
		rightImg,
	} = attributes;

	const renderSidebarSettings = () => {
		return (
			<InspectorControls key="setting">
				<div data-type="ncmaz-core/sidebar-settings">
					<Panel header="Section settings">
						<PanelBody initialOpen title="General settings">
							<PanelRow>
								<div>
									<TextControl
										label="Heading small text"
										value={headingSmallText}
										onChange={(headingSmallText) =>
											setAttributes({ headingSmallText })
										}
									/>

									<TextControl
										label="Heading"
										value={heading}
										onChange={(heading) => setAttributes({ heading })}
									/>

									<TextareaControl
										label="Description"
										value={description}
										onChange={(description) => setAttributes({ description })}
									/>

									<TextControl
										label="Button Text"
										value={buttonText}
										onChange={(buttonText) => setAttributes({ buttonText })}
									/>

									<TextControl
										label="Button Link"
										value={buttonHref}
										onChange={(buttonHref) => setAttributes({ buttonHref })}
									/>

									<TextControl
										label="Right Image url"
										value={rightImg}
										onChange={(rightImg) => setAttributes({ rightImg })}
									/>

									<div className="w-full space-x-3 flex ">
										<FormToggle
											checked={hasBackground}
											onChange={() =>
												setAttributes({ hasBackground: !hasBackground })
											}
											label={__("Enable Background", "ncmaz-core")}
										/>
										<legend>{__("Enable Background", "ncmaz-core")}</legend>
									</div>
								</div>
							</PanelRow>
						</PanelBody>
					</Panel>
				</div>
			</InspectorControls>
		);
	};

	const renderPreviewContent = () => {
		return (
			<div className={hasBackground ? "py-16" : ""}>
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
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSettings()}
			{renderPreviewContent()}
		</div>
	);
}
