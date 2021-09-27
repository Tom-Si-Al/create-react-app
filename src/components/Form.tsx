export const Form = (props:any) => {
  return (
    <form onSubmit={props.onSubmit}>
      <p>Enter your email, and submit:</p>
      <input type="text" onChange={props.onChange} />
      <input type="submit" />
    </form>
  );
};
