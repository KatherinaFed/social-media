import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForNavigate = (state) => ({
  isAuth: state.auth.isAuth,
});

// HOC function
export const withAuthNavigate = (Component) => {
  // класс-обертка для компонента, который приходит на вход
  class NavigateComponent extends React.Component {
    render() { 
      if (!this.props.isAuth) {
        return <Navigate to='/login' />;
      }

      return <Component {...this.props} />;
    }
  }

  // Для того, чтобы пробросить в другие Компоненты общий параметр из state,
  // делаем еще одну обертку над классом-оберткой, который создает общую логику
  // и перерисовывает компонент, приходящий на вход
  const ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);

  return ConnectAuthNavigateComponent;
};
