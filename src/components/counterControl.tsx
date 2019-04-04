import * as React from "react";
import { Input, Button, Row, Col } from "antd";

export interface ICounterControlProps {
  value: number;
  onIncrement(value: number): void;
  onDecrement(value: number): void;
}

export interface ICounterControlState {
  increment: number;
  decrement: number;
}
export class CounterControl extends React.PureComponent<
  ICounterControlProps,
  ICounterControlState
> {
  public state = {
    increment: 1,
    decrement: 1
  };

  public render(): React.ReactNode {
    const { value } = this.props;
    const { decrement, increment } = this.state;
    return (
      <Row>
        <Col offset={1} span={4}>
          <Input
            value={decrement}
            onChange={this.handleDecChange}
            addonAfter={<Button size={"small"} onClick={this.handleDec}>-</Button>}
          />
        </Col>
        <Col offset={1} span={4}>
          <Input value={value} readOnly disabled />
        </Col>
        <Col offset={1} span={4}>
          <Input
            value={increment}
            onChange={this.handleIncChange}
            addonBefore={<Button size={"small"} onClick={this.handleInc}>+</Button>}
          />
        </Col>
      </Row>
    );
  }

  private handleDecChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ decrement: Number(e.target.value) });
  };

  private handleIncChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ increment: Number(e.target.value) });
  };

  private handleDec = () => {
    this.props.onDecrement(this.state.decrement);
  };

  private handleInc = () => {
    this.props.onIncrement(this.state.increment);
  };
}
