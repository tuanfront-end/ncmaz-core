import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import {
	Panel,
	PanelBody,
	FormToggle,
	RangeControl,
} from "@wordpress/components";

interface SliderSettingsProps {
	itemPerView: number;
	sliderStartAt: number;
	sliderAutoplayTime: number;
	sliderHoverpause: boolean;
	sliderAnimationDuration: number;
	sliderRewind: boolean;
	onChangeItemPerView: (value: number) => void;
	onChangeSliderStartAt: (value: number) => void;
	onChangeSliderAutoplayTime: (value: number) => void;
	onChangeSliderHoverpause: (value: boolean) => void;
	onChangeSliderAnimationDuration: (value: number) => void;
	onChangeSliderRewind: (value: boolean) => void;
}

const SliderSettings: FC<SliderSettingsProps> = ({
	itemPerView,
	sliderStartAt,
	sliderAutoplayTime,
	sliderHoverpause,
	sliderAnimationDuration,
	sliderRewind,
	onChangeItemPerView,
	onChangeSliderStartAt,
	onChangeSliderAutoplayTime,
	onChangeSliderHoverpause,
	onChangeSliderAnimationDuration,
	onChangeSliderRewind,
}) => {
	return (
		<Panel header={__("Slider Settings", "ncmaz-core")}>
			<PanelBody
				title={__("Slider Settings", "ncmaz-core")}
				initialOpen={false}
			>
				<RangeControl
					label={__("Item per view (A number of visible slide)", "ncmaz-core")}
					value={itemPerView}
					onChange={onChangeItemPerView}
					min={1}
					max={8}
				/>
				<RangeControl
					label={__(
						"Slider Start at (Start at specific slide number)",
						"ncmaz-core"
					)}
					value={sliderStartAt}
					onChange={onChangeSliderStartAt}
					min={0}
					max={itemPerView || 10}
				/>
				<RangeControl
					label={__(
						"Slider AutoplayTime (Change slides after a specified interval. Use 0 for turning off autoplay.)",
						"ncmaz-core"
					)}
					value={sliderAutoplayTime}
					onChange={onChangeSliderAutoplayTime}
					min={0}
					max={5000}
					step={100}
				/>
				<RangeControl
					label={__(
						"Slider AnimationDuration (Duration of the animation in milliseconds.)",
						"ncmaz-core"
					)}
					value={sliderAnimationDuration}
					onChange={onChangeSliderAnimationDuration}
					min={0}
					max={5000}
					step={100}
				/>

				<div className="w-full space-x-3 flex ">
					<FormToggle
						checked={!!sliderHoverpause}
						onChange={(e) => onChangeSliderHoverpause(e.currentTarget.checked)}
					/>
					<legend>
						{__(
							"Slider hoverpause (Stop autoplay on mouseover event.)",
							"ncmaz-core"
						)}
					</legend>
				</div>
				<div className="w-full space-x-3 flex ">
					<FormToggle
						checked={!!sliderRewind}
						onChange={(e) => onChangeSliderRewind(e.currentTarget.checked)}
					/>
					<legend>
						{__(
							"Slider rewind (Allows looping the slider type. Slider will rewind to the first/last slide when it's at the start/end)",
							"ncmaz-core"
						)}
					</legend>
				</div>
			</PanelBody>
		</Panel>
	);
};

export default SliderSettings;
