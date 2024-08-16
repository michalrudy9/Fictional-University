import apiFetch from "@wordpress/api-fetch";
import { useEffect } from "@wordpress/element";
import { Button, PanelRow, PanelBody } from "@wordpress/components";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

wp.blocks.registerBlockType("ourblocktheme/banner", {
  title: "Banner",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: banner.fallbackimage },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  useEffect(() => {
    if (props.attributes.imgID) {
      async function go() {
        const response = await apiFetch({
          path: `/wp/v2/media/${props.attributes.imgID}`,
          methos: "GET",
        });
        props.setAttributes({
          imgURL: response.media_details.sizes.pageBanner.source_url,
        });
      }

      go();
    }
  }, [props.attributes.imgID]);

  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>;
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="page-banner">
        <div
          className="page-banner__bg-image"
          style={{
            backgroundImage: `url('${props.attributes.imgURL}')`,
          }}
        ></div>
        <div className="page-banner__content container t-center c-white">
          <InnerBlocks
            allowedBlocks={[
              "ourblocktheme/genericheading",
              "ourblocktheme/genericbutton",
            ]}
          />
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
