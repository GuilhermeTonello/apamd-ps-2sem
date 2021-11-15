console.log(sistemas);

function gerarTabelas() {
    let dateText = document.querySelector('main section h3');
    dateText.innerHTML = `Data dos dados: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

    let section = document.querySelector('main section');
    for (let i = 0; i < sistemas.length; i++) {
        section.insertAdjacentHTML('beforeend', `
            <div class="card">
                <h3>Sistema de Abastecimento: ${sistemas[i].nome}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>MÊS</th>
                            <th colspan="2">
                                TURBIDEZ
                                <table>
                                    <tr>
                                        <td>EXIGIDO</td>
                                        <td>REALIZADO</td>
                                    </tr>
                                </table>
                            </th>
                            <th colspan="2">
                                COR APARENTE
                                <table>
                                    <tr>
                                        <td>EXIGIDO</td>
                                        <td>REALIZADO</td>
                                    </tr>
                                </table>
                            </th>
                            <th colspan="2">
                                CLORO RESIDUAL LIVRE
                                <table>
                                    <tr>
                                        <td>EXIGIDO</td>
                                        <td>REALIZADO</td>
                                    </tr>
                                </table>
                            </th>
                            <th colspan="2">
                                COLIFORME TOTAL
                                <table>
                                    <tr>
                                        <td>EXIGIDO</td>
                                        <td>REALIZADO</td>
                                    </tr>
                                </table>
                            </th>
                            <th colspan="2">
                                E.COLI
                                <table>
                                    <tr>
                                        <td>EXIGIDO</td>
                                        <td>REALIZADO</td>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="${sistemas[i].municipio.replace(/\s/g, '')}${sistemas[i].nome.replace(/\s/g, '')}">
                    </tbody>
                </table>
            </div>
        `);
        let tbody = document.querySelector(`tbody#${sistemas[i].municipio.replace(/\s/g, '')}${sistemas[i].nome.replace(/\s/g, '')}`);
        for (let j = 0; j < sistemas[i].periodos.length; j++) {
            tbody.insertAdjacentHTML('beforeend', `
                <tr>
                    <td>${sistemas[i].periodos[j].periodo}</td>

                    <td>${sistemas[i].periodos[j].turbidez.exigido}</td>
                    <td>${sistemas[i].periodos[j].turbidez.realizado}</td>

                    <td>${sistemas[i].periodos[j].corAparente.exigido}</td>
                    <td>${sistemas[i].periodos[j].corAparente.realizado}</td>

                    <td>${sistemas[i].periodos[j].cloroResidualLivre.exigido}</td>
                    <td>${sistemas[i].periodos[j].cloroResidualLivre.realizado}</td>

                    <td>${sistemas[i].periodos[j].coliformeTotal.exigido}</td>
                    <td>${sistemas[i].periodos[j].coliformeTotal.realizado}</td>

                    <td>${sistemas[i].periodos[j].eColi.exigido}</td>
                    <td>${sistemas[i].periodos[j].eColi.realizado}</td>
                </tr>
            `);
        }
    }
}
