import { useBlockProps } from "@wordpress/block-editor";

const Edit = () => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="our-placeholder-block">University Header Placeholder</div>
    </div>
  );
};

export default Edit;
