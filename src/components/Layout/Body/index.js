const index = (props) => {
  return (
    <div {...props} className="body">
      {props.children}
    </div>
  );
};

export default index;
