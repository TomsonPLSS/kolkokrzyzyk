var player = "X";
function plansza(colcount, rowcount) {
    this.pola = [];
    var content = $('#kolkokrzyzyk');
    var div = document.createElement('div');
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.backgroundColor = "silver";
    var cols = colcount;
    var rows = rowcount;
    for (i = 0; i < rowcount; i++) {
        var row = [];
        for (j = 0; j < colcount; j++) {
            row.push(new pole(500 / colcount - 4, 500 / rowcount - 4, div, this));
        }
        this.pola.push(row);
    }
    content.append(div);
    this.checkWinner = function () {
        var counter = 0;
        var sign = '';
        for (i = 0; i < cols; i++)
        {
            counter = 0;
            for (j = 0; j < rows; j++)
            {
                if (this.pola[j][i].value() == '')
                {
                    sign = '';
                    break;
                } else if ((sign != '') && (this.pola[j][i].value() != sign)) {
                    sign = '';
                    break;
                } else
                    sign = this.pola[j][i].value();
            }
            if (sign != '') {
                break;
            }
        }
        if (sign === '')
        {
            for (i = 0; i < rows; i++)
            {
                counter = 0;
                for (j = 0; j < cols; j++)
                {
                    if (this.pola[i][j].value() == '')
                    {
                        sign = '';
                        break;
                    } else if ((sign != '') && (this.pola[i][j].value() != sign)) {
                        sign = '';
                        break;
                    } else
                        sign = this.pola[i][j].value();
                }
                if (sign != '') {
                    break;
                }
            }
        }
        if (sign === '')
        {
            for (i = 0; i < rows; i++)
            {
                if (this.pola[i][i].value() == '')
                {
                    sign = '';
                    break;
                } else if ((sign != '') && (this.pola[i][i].value() != sign)) {
                    sign = '';
                    break;
                } else
                {
                    sign = this.pola[i][i].value();
                }

            }
        }
        if (sign === '')
        {
            for (i = cols - 1; i >= 0; i--)
            {
                if (this.pola[rows - i -1][i].value() == '')
                {
                    sign = '';
                    break;
                } else if ((sign != '') && (this.pola[rows - i -1][i].value() != sign)) {
                    sign = '';
                    break;
                } else
                {
                    sign = this.pola[rows - i - 1][i].value();
                }

            }
        }
        if (sign != '') {
            alert('wygrana' + sign);
        }
    };

}
function pole(width, height, divPlansza, plansza) {
    var div = document.createElement('div');
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.textAlign = 'center';
    div.style.lineHeight = height + 'px';
    div.style.border = '2px solid black';
    div.style.float = 'left';

    div.style.cursor = 'pointer';
    div.onclick = function () {
        if (this.innerHTML == '')
        {
            this.innerHTML = player;
            if (player === 'X')
                player = '0';
            else
                player = 'X';
        }
        plansza.checkWinner();

    }

    this.value = function () {
        return div.innerHTML;
    }
    divPlansza.append(div);
}
;



var plan = new plansza(3, 3);

