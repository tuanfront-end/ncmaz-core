import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	TextControl,
	TextareaControl,
	FormTokenField,
} from "@wordpress/components";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "../frontend-components/SectionVideos/SectionVideos";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	//
	const { hasBackground, heading, subHeading, videoIds } = attributes;

	const renderSidebarSettings = () => {
		return (
			<InspectorControls key="setting">
				<div data-type="ncmaz-core/sidebar-settings">
					<Panel header="Section settings">
						<PanelBody initialOpen title="General settings">
							<PanelRow>
								<div>
									<TextControl
										label="Heading"
										value={heading}
										onChange={(heading) => setAttributes({ heading })}
									/>

									<TextareaControl
										label="Sub heading"
										value={subHeading}
										onChange={(subHeading) => setAttributes({ subHeading })}
									/>

									<div className="mb-3">
										<FormTokenField
											value={videoIds}
											suggestions={[]}
											onChange={(videoIds) => setAttributes({ videoIds })}
											label={__("Video IDs", "ncmaz-core")}
											placeholder={__("Enter youtube video id", "ncmaz-core")}
										/>
									</div>

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
				<SectionVideos
					heading={heading}
					subHeading={subHeading}
					videoIds={videoIds}
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
