import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import {
	InspectorControls,
	RichText,
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
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
		mediaId,
		mediaUrl,
	} = attributes;

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: "",
		});
	};

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
		});
	};

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

									<div className="editor-post-featured-image mb-3">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={onSelectMedia}
												value={mediaId}
												allowedTypes={["image"]}
												render={({ open }) => (
													<Button
														className={
															mediaId == 0
																? "editor-post-featured-image__toggle"
																: "editor-post-featured-image__preview"
														}
														onClick={open}
													>
														{mediaId == 0 && __("Choose an image", "awp")}
														{!!mediaUrl && (
															<img src={mediaUrl} className="w-full" />
														)}
													</Button>
												)}
											/>
										</MediaUploadCheck>
										{mediaId !== 0 && (
											<MediaUploadCheck>
												<MediaUpload
													title={__("Replace image", "awp")}
													value={mediaId}
													onSelect={onSelectMedia}
													allowedTypes={["image"]}
													render={({ open }) => (
														<Button onClick={open} isDefault isLarge>
															{__("Replace image", "awp")}
														</Button>
													)}
												/>
											</MediaUploadCheck>
										)}
										{mediaId !== 0 && (
											<MediaUploadCheck>
												<Button onClick={removeMedia} isLink isDestructive>
													{__("Remove image", "awp")}
												</Button>
											</MediaUploadCheck>
										)}
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

				<SectionBecomeAnAuthor
					heading={heading}
					description={description}
					smallText={headingSmallText}
					buttonHref={buttonHref}
					buttonText={buttonText}
					rightImg={mediaUrl}
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
