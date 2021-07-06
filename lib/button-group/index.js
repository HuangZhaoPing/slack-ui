import './index.css';
import ButtonGroup from './index.vue';

ButtonGroup.install = app => {
  app.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;