import "./index.scss";
import { useBlockProps } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

registerBlockType(metadata.name, { edit: EditComponent });

function EditComponent(props) {
  return (
    <div {...useBlockProps()}>
      <div className="featured-professor-wrapper">
        <div className="professor-select-container">
          <select
            onChange={(e) => props.setAttributes({ profId: e.target.value })}
          >
            <option value="">Select a professor</option>
            <option value="1" selected={props.attributes.profId == 1}>
              1
            </option>
            <option value="2" selected={props.attributes.profId == 2}>
              2
            </option>
            <option value="3" selected={props.attributes.profId == 3}>
              3
            </option>
          </select>
        </div>
        <div>The HTML preview of the selected professor will appear here.</div>
      </div>
    </div>
  );
}
