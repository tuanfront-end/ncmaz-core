import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
		roleIn,
		userIds,
		orderBy,
		order,
		numberPerPage,
		//
		blockLayoutStyle,
		userCardName,
		gridClass,
		gridClassCustom,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		graphQLData,
	} = attributes;

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-user-grid",
					graphQLData,
					settings: {
						userCardName,
						gridClass,
						gridClassCustom,
						heading,
						subHeading,
						hasBackground,
						blockLayoutStyle,
					},
			  }
			: {
					blockName: "nc-block-user-grid",
					graphQLvariables,
					settings: {
						userCardName,
						gridClass,
						gridClassCustom,
						heading,
						subHeading,
						hasBackground,
						blockLayoutStyle,
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-users-grid"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
