import { link } from "@wordpress/icons";
import {
  ToolbarGroup,
  ToolbarButton,
  Popover,
  Button,
  PanelBody,
  PanelRow,
  ColorPalette,
} from "@wordpress/components";
import {
  RichText,
  BlockControls,
  __experimentalLinkControl as LinkControl,
  InspectorControls,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

wp.blocks.registerBlockType("ourblocktheme/genericbutton", {
  title: "Generic Button",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" },
    linkObject: { type: "object", default: { url: "" } },
    colorName: { type: "string" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const [isLinkPickerVislible, setIsLinkPickerVislible] = useState(false);
  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }

  function buttonHandler() {
    setIsLinkPickerVislible((prev) => !prev);
  }

  function handleLinkChange(newLink) {
    props.setAttributes({ linkObject: newLink });
  }

  const ourColors = [
    { name: "blue", color: "#0d3b66" },
    { name: "orange", color: "#ee964b" },
    { name: "dark-orange", color: "#f95738" },
  ];

  function handleColorChange(colorCode) {
    props.setAttributes({ colorName: colorCode });
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={buttonHandler} icon={link} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={props.attributes.size === "large"}
            onClick={() => props.setAttributes({ size: "large" })}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === "medium"}
            onClick={() => props.setAttributes({ size: "medium" })}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === "small"}
            onClick={() => props.setAttributes({ size: "small" })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette
              colors={ourColors}
              value={props.attributes.colorName}
              onChange={handleColorChange}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText
        allowedFormats={[]}
        tagName="a"
        className={`btn btn--${props.attributes.size} btn--blue`}
        value={props.attributes.text}
        onChange={handleTextChange}
      />
      {isLinkPickerVislible && (
        <Popover position="middle center">
          <LinkControl
            settings={[]}
            value={props.attributes.linkObject}
            onChange={handleLinkChange}
          />
          <Button
            variant="primary"
            onClick={() => setIsLinkPickerVislible(false)}
            style={{ display: "block", width: "100%" }}
          >
            Confirm Link
          </Button>
        </Popover>
      )}
    </>
  );
}

function SaveComponent(props) {
  return (
    <a
      href={props.attributes.linkObject.url}
      className={`btn btn--${props.attributes.size} btn--blue`}
    >
      {props.attributes.text}
    </a>
  );
}
