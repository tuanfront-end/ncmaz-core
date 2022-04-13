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
	Button,
} from "@wordpress/components";
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import Badge from "../frontend-components/Badge/Badge";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	//
	const {
		hasBackground,
		heading,
		subHeading,
		descLists,
		mediaUrl,
		mediaId,
		mediaSrcSet,
	} = attributes;

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: "",
			mediaSrcSet: "",
		});
	};

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaSrcSet: `${media.url} 1297w, ${media.sizes?.medium?.url} 300w, ${media.sizes?.full?.url} 1024w, ${media.sizes?.large?.url} 768w`,
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
											value={descLists}
											suggestions={[]}
											onChange={(descLists) => setAttributes({ descLists })}
										/>
									</div>

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
														<Button onClick={open}>
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
						<div className="mt-10 relative max-w-sm">
							<InnerBlocks
								template={[["core/shortcode", {}]]}
								templateLock="all"
							/>
						</div>
					</div>
					<div className="flex-grow">
						{mediaUrl && <img src={mediaUrl} className="w-full" alt="" />}
					</div>
				</div>
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
