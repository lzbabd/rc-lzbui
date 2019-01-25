import { Form } from 'antd';
import React, { Component } from 'react';
import OssUpload from './OssUpload';

Form.create();
export default class Test extends Component {
  public render() {
    return <Form>
      <div>
        <OssUpload
          authToken={'xzczxc'}
          sessionId={'xxxxxx'}
          rule={{
            bizzCode: 'F_IMG_0001',
            suffix: 'jpg,png,gif'
          }}
          multiple={true}
          listType="picture-card"
          len={3}
        />
      </div>
    </Form>;
  }
}
