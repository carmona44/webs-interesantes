import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import './ExpansionPanel.css';

class ControlledExpansionPanels extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: null,
            seccionPrev: ''
        }
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        const { webs } = this.props.webs;
        return (
            <div className="evita-menu">
                {
                    
                    webs.map( (e, index) =>
                        <div key={index}>
                            {
                                index > 0 ? e.tipo !== webs[index - 1].tipo ?
                                    <h4 className="titulo-tipo">{e.tipo.toUpperCase()}</h4> :
                                    null :
                                    <h4 className="titulo-tipo">{e.tipo.toUpperCase()}</h4>
                            }

                                <ExpansionPanel className="espacio" key={e.id} expanded={expanded === 'panel'+e.id} onChange={this.handleChange('panel'+e.id)}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                         {/* Ñapa sana */}
                                        <div style ={{display: "flex" , alignItems: "center"}}>
                                            <Avatar style={{width: e.icono.size, height: e.icono.size, borderRadius: 0, marginRight: "10px"}} src={e.icono.url}></Avatar>
                                            <Typography>{e.nombre}</Typography>
                                            <Typography><span className={e.idioma === 'ES' ? "idiomaES" : "idiomaEN"}>{e.idioma}</span></Typography>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="detalles">
                                        <Typography>
                                            {e.descripcion}
                                            <br/><br/>
                                            <a href={e.url}>{e.url}</a>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ControlledExpansionPanels;