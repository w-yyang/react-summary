import React from "react";

class PropsComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render(): React.ReactNode {
    const propsParam = this.props;

    console.log('propsParam', propsParam);

    return (
      <div>test</div>
    );
  }
}

export default function(props) {
  return (
    <div>
      {/* @ts-ignores */}
      <PropsComp test='1234567' />
    </div>
  );
}