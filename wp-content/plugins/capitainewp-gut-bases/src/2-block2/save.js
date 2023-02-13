/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps} className="container">
			<div className="blockImage">
				{
					props.attributes.pictureID && (
						<p { ...blockProps }>
							<img src={ props.attributes.pictureURL } alt={ props.attributes.pictureAlt } />
						</p>
					)
				}
			</div>
			<div className="blockTexte">
				<RichText.Content
					tagName="p"
					className="content"
					value={props.attributes.content}
				/>
			</div>
		</div>
	);
}
