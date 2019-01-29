import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DATA from './webs.json';
import './ExpansionPanel.css';

class ControlledExpansionPanels extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: null,
            tipo: props.tipo
        }
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;

        return (
            <div className="evita-menu">
                <h4 className="titulo-tipo">{this.state.tipo.toUpperCase()}</h4>
                {DATA[this.state.tipo].map(e =>

                <ExpansionPanel className="espacio" key={e.id} expanded={expanded === 'panel'+e.id} onChange={this.handleChange('panel'+e.id)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{e.nombre}</Typography>
                        <Typography><span className={e.idioma === 'ES' ? "idiomaES" : "idiomaEN"}>{e.idioma}</span></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detalles">
                        <Typography>
                            {e.descripcion}
                        </Typography>
                        <Typography>
                            <a href={e.url}>{e.url}</a>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                )}
            </div>
        );
    }
}

export default ControlledExpansionPanels;
