import React from 'react';
import API from '../../services/api.service';

export const withApiService = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      data: [],
    };

    componentDidMount() {
      API.getTodoList().then((data) => this.setState({ data }));
    }

    render() {
      const { data } = this.state;

      return <WrappedComponent {...this.props} data={data} />;
    }
  };
};
