import * as React from "react";
import { Row, Col, Button, List, Card } from "antd";

import { ICounter } from "../store/appState";
import Counter from "../containers/counterContainer";

export interface ICountersControlProps {
  counters?: ICounter[];
  onAddCounter(): void;
}
export class CountersControl extends React.PureComponent<
  ICountersControlProps
> {
  public render(): React.ReactNode {
    const { counters, onAddCounter } = this.props;
    return (
      <Row>
        <Row>
          <Card
            title={
              <Button onClick={onAddCounter}>
                Add Counter
              </Button>
            }
          />
        </Row>
        <Row>
          <Col>
            <List
              itemLayout="horizontal"
              dataSource={counters}
              renderItem={(el: ICounter) => (
                <List.Item>
                  <Counter key={el.id} id={el.id} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Row>
    );
  }
}
