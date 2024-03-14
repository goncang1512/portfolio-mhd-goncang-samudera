// eslint-disable-next-line react/prop-types
function IconSkill({ src, alt, title }) {
  return (
    <>
      <div className="flex items-center">
        <img
          className="w-8 cursor-pointer icon-skill grayscale brightness-75 hover:filter-none"
          src={src}
          alt={alt}
          title={title}
        />
      </div>
    </>
  );
}

export default IconSkill;
