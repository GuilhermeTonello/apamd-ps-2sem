let data = new Date(2021, 9, 21, 0, 0, 0);

let sistemas = [
    {
        nome: "Cantareira",
        municipio: "São Paulo",
        periodos: [
            {
                periodo: "Janeiro",
                turbidez: {
                    exigido: 725,
                    realizado: 792,
                    conforme: 792
                },
                corAparente: {
                    exigido: 231,
                    realizado: 273,
                    conforme: 273
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 792,
                    conforme: 792
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 790,
                    conforme: 784
                },
                eColi: {
                    exigido: 725,
                    realizado: 790,
                    conforme: 790
                }
            },
            {
                periodo: "Fevereiro",
                turbidez: {
                    exigido: 725,
                    realizado: 793,
                    conforme: 791
                },
                corAparente: {
                    exigido: 231,
                    realizado: 269,
                    conforme: 269
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 793,
                    conforme: 793
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 793,
                    conforme: 784
                },
                eColi: {
                    exigido: 725,
                    realizado: 793,
                    conforme: 793
                }
            },
            {
                periodo: "Março",
                turbidez: {
                    exigido: 725,
                    realizado: 797,
                    conforme: 794
                },
                corAparente: {
                    exigido: 231,
                    realizado: 279,
                    conforme: 279
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 797,
                    conforme: 797
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 797,
                    conforme: 790
                },
                eColi: {
                    exigido: 725,
                    realizado: 797,
                    conforme: 796
                }
            },
            {
                periodo: "Abril",
                turbidez: {
                    exigido: 725,
                    realizado: 808,
                    conforme: 808
                },
                corAparente: {
                    exigido: 231,
                    realizado: 284,
                    conforme: 284
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 807,
                    conforme: 807
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 804,
                    conforme: 801
                },
                eColi: {
                    exigido: 725,
                    realizado: 804,
                    conforme: 804
                }
            },
            {
                periodo: "Maio",
                turbidez: {
                    exigido: 725,
                    realizado: 792,
                    conforme: 792
                },
                corAparente: {
                    exigido: 231,
                    realizado: 276,
                    conforme: 276
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 793,
                    conforme: 793
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 792,
                    conforme: 781
                },
                eColi: {
                    exigido: 725,
                    realizado: 792,
                    conforme: 792
                }
            },
            {
                periodo: "Junho",
                turbidez: {
                    exigido: 725,
                    realizado: 805,
                    conforme: 805
                },
                corAparente: {
                    exigido: 231,
                    realizado: 454,
                    conforme: 454
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 805,
                    conforme: 805
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 802,
                    conforme: 786
                },
                eColi: {
                    exigido: 725,
                    realizado: 802,
                    conforme: 802
                }
            },
            {
                periodo: "Julho",
                turbidez: {
                    exigido: 725,
                    realizado: 807,
                    conforme: 807
                },
                corAparente: {
                    exigido: 231,
                    realizado: 495,
                    conforme: 495
                },
                cloroResidualLivre: {
                    exigido: 725,
                    realizado: 810,
                    conforme: 810
                },
                coliformeTotal: {
                    exigido: 725,
                    realizado: 801,
                    conforme: 798
                },
                eColi: {
                    exigido: 725,
                    realizado: 801,
                    conforme: 801
                }
            },
            {
                periodo: "Agosto",
                turbidez: {
                    exigido: 290,
                    realizado: 773,
                    conforme: 772
                },
                corAparente: {
                    exigido: 290,
                    realizado: 773,
                    conforme: 772
                },
                cloroResidualLivre: {
                    exigido: 290,
                    realizado: 773,
                    conforme: 773
                },
                coliformeTotal: {
                    exigido: 290,
                    realizado: 773,
                    conforme: 772
                },
                eColi: {
                    exigido: 290,
                    realizado: 773,
                    conforme: 773
                }
            },
            {
                periodo: "Setembro",
                turbidez: {
                    exigido: 290,
                    realizado: 598,
                    conforme: 596
                },
                corAparente: {
                    exigido: 290,
                    realizado: 598,
                    conforme: 595
                },
                cloroResidualLivre: {
                    exigido: 290,
                    realizado: 592,
                    conforme: 592
                },
                coliformeTotal: {
                    exigido: 290,
                    realizado: 592,
                    conforme: 589
                },
                eColi: {
                    exigido: 290,
                    realizado: 592,
                    conforme: 592
                }
            }
        ]
    },
    {
        nome: "Alto Tietê",
        municipio: "São Paulo",
        periodos: [
            {
                periodo: "Janeiro",
                turbidez: {
                    exigido: 563,
                    realizado: 614,
                    conforme: 613
                },
                corAparente: {
                    exigido: 124,
                    realizado: 189,
                    conforme: 188
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 614,
                    conforme: 614
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 614,
                    conforme: 614
                },
                eColi: {
                    exigido: 563,
                    realizado: 614,
                    conforme: 614
                }
            },
            {
                periodo: "Fevereiro",
                turbidez: {
                    exigido: 563,
                    realizado: 10,
                    conforme: 593
                },
                corAparente: {
                    exigido: 124,
                    realizado: 182,
                    conforme: 181
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 593,
                    conforme: 593
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 593,
                    conforme: 591
                },
                eColi: {
                    exigido: 563,
                    realizado: 593,
                    conforme: 593
                }
            },
            {
                periodo: "Março",
                turbidez: {
                    exigido: 563,
                    realizado: 597,
                    conforme: 597
                },
                corAparente: {
                    exigido: 124,
                    realizado: 183,
                    conforme: 181
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 597,
                    conforme: 597
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 597,
                    conforme: 592
                },
                eColi: {
                    exigido: 563,
                    realizado: 597,
                    conforme: 597
                }
            },
            {
                periodo: "Abril",
                turbidez: {
                    exigido: 563,
                    realizado: 586,
                    conforme: 586
                },
                corAparente: {
                    exigido: 124,
                    realizado: 181,
                    conforme: 181
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 586,
                    conforme: 586
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 583,
                    conforme: 579
                },
                eColi: {
                    exigido: 563,
                    realizado: 583,
                    conforme: 583
                }
            },
            {
                periodo: "Maio",
                turbidez: {
                    exigido: 563,
                    realizado: 587,
                    conforme: 587
                },
                corAparente: {
                    exigido: 124,
                    realizado: 184,
                    conforme: 184
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 587,
                    conforme: 587
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 587,
                    conforme: 582
                },
                eColi: {
                    exigido: 563,
                    realizado: 587,
                    conforme: 587
                }
            },
            {
                periodo: "Junho",
                turbidez: {
                    exigido: 563,
                    realizado: 582,
                    conforme: 582
                },
                corAparente: {
                    exigido: 124,
                    realizado: 255,
                    conforme: 254
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 582,
                    conforme: 582
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 582,
                    conforme: 582
                },
                eColi: {
                    exigido: 563,
                    realizado: 582,
                    conforme: 582
                }
            },
            {
                periodo: "Julho",
                turbidez: {
                    exigido: 563,
                    realizado: 590,
                    conforme: 590
                },
                corAparente: {
                    exigido: 124,
                    realizado: 261,
                    conforme: 261
                },
                cloroResidualLivre: {
                    exigido: 563,
                    realizado: 590,
                    conforme: 590
                },
                coliformeTotal: {
                    exigido: 563,
                    realizado: 589,
                    conforme: 586
                },
                eColi: {
                    exigido: 563,
                    realizado: 589,
                    conforme: 589
                }
            },
            {
                periodo: "Agosto",
                turbidez: {
                    exigido: 242,
                    realizado: 593,
                    conforme: 593
                },
                corAparente: {
                    exigido: 242,
                    realizado: 593,
                    conforme: 591
                },
                cloroResidualLivre: {
                    exigido: 242,
                    realizado: 593,
                    conforme: 593
                },
                coliformeTotal: {
                    exigido: 242,
                    realizado: 593,
                    conforme: 592
                },
                eColi: {
                    exigido: 242,
                    realizado: 593,
                    conforme: 593
                }
            },
            {
                periodo: "Setembro",
                turbidez: {
                    exigido: 242,
                    realizado: 373,
                    conforme: 373
                },
                corAparente: {
                    exigido: 242,
                    realizado: 373,
                    conforme: 371
                },
                cloroResidualLivre: {
                    exigido: 242,
                    realizado: 373,
                    conforme: 373
                },
                coliformeTotal: {
                    exigido: 242,
                    realizado: 371,
                    conforme: 371
                },
                eColi: {
                    exigido: 242,
                    realizado: 371,
                    conforme: 371
                }
            }
        ]
    },
    {
        nome: "Guarapiranga",
        municipio: "São Paulo",
        periodos: [
            {
                periodo: "Janeiro",
                turbidez: {
                    exigido: 801,
                    realizado: 801,
                    conforme: 790
                },
                corAparente: {
                    exigido: 177,
                    realizado: 229,
                    conforme: 227
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 803,
                    conforme: 775
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 801,
                    conforme: 792
                },
                eColi: {
                    exigido: 801,
                    realizado: 801,
                    conforme: 801
                }
            },
            {
                periodo: "Fevereiro",
                turbidez: {
                    exigido: 801,
                    realizado: 832,
                    conforme: 829
                },
                corAparente: {
                    exigido: 177,
                    realizado: 211,
                    conforme: 210
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 831,
                    conforme: 816
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 832,
                    conforme: 816
                },
                eColi: {
                    exigido: 801,
                    realizado: 832,
                    conforme: 832
                }
            },
            {
                periodo: "Março",
                turbidez: {
                    exigido: 801,
                    realizado: 803,
                    conforme: 801
                },
                corAparente: {
                    exigido: 177,
                    realizado: 211,
                    conforme: 211
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 805,
                    conforme: 793
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 804,
                    conforme: 789
                },
                eColi: {
                    exigido: 801,
                    realizado: 804,
                    conforme: 804
                }
            },
            {
                periodo: "Abril",
                turbidez: {
                    exigido: 801,
                    realizado: 809,
                    conforme: 805
                },
                corAparente: {
                    exigido: 177,
                    realizado: 222,
                    conforme: 222
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 810,
                    conforme: 803
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 805,
                    conforme: 777
                },
                eColi: {
                    exigido: 801,
                    realizado: 805,
                    conforme: 805
                }
            },
            {
                periodo: "Maio",
                turbidez: {
                    exigido: 801,
                    realizado: 834,
                    conforme: 831
                },
                corAparente: {
                    exigido: 177,
                    realizado: 209,
                    conforme: 208
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 834,
                    conforme: 825
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 825,
                    conforme: 816
                },
                eColi: {
                    exigido: 801,
                    realizado: 825,
                    conforme: 825
                }
            },
            {
                periodo: "Junho",
                turbidez: {
                    exigido: 801,
                    realizado: 810,
                    conforme: 805
                },
                corAparente: {
                    exigido: 177,
                    realizado: 227,
                    conforme: 227
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 811,
                    conforme: 803
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 808,
                    conforme: 807
                },
                eColi: {
                    exigido: 801,
                    realizado: 808,
                    conforme: 808
                }
            },
            {
                periodo: "Julho",
                turbidez: {
                    exigido: 801,
                    realizado: 804,
                    conforme: 800
                },
                corAparente: {
                    exigido: 177,
                    realizado: 252,
                    conforme: 252
                },
                cloroResidualLivre: {
                    exigido: 801,
                    realizado: 810,
                    conforme: 807
                },
                coliformeTotal: {
                    exigido: 801,
                    realizado: 804,
                    conforme: 800
                },
                eColi: {
                    exigido: 801,
                    realizado: 804,
                    conforme: 804
                }
            },
            {
                periodo: "Agosto",
                turbidez: {
                    exigido: 346,
                    realizado: 392,
                    conforme: 389
                },
                corAparente: {
                    exigido: 346,
                    realizado: 392,
                    conforme: 390
                },
                cloroResidualLivre: {
                    exigido: 346,
                    realizado: 390,
                    conforme: 386
                },
                coliformeTotal: {
                    exigido: 346,
                    realizado: 392,
                    conforme: 391
                },
                eColi: {
                    exigido: 346,
                    realizado: 392,
                    conforme: 392
                }
            },
            {
                periodo: "Setembro",
                turbidez: {
                    exigido: 346,
                    realizado: 350,
                    conforme: 348
                },
                corAparente: {
                    exigido: 346,
                    realizado: 350,
                    conforme: 346
                },
                cloroResidualLivre: {
                    exigido: 346,
                    realizado: 352,
                    conforme: 340
                },
                coliformeTotal: {
                    exigido: 346,
                    realizado: 349,
                    conforme: 347
                },
                eColi: {
                    exigido: 346,
                    realizado: 349,
                    conforme: 349
                }
            }
        ]
    },
    {
        nome: "Marsilac",
        municipio: "São Paulo",
        periodos: [
            {
                periodo: "Janeiro",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Fevereiro",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Março",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Abril",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 9
                },
                corAparente: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Maio",
                turbidez: {
                    exigido: 10,
                    realizado: 12,
                    conforme: 12
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 13,
                    conforme: 13
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 12,
                    conforme: 12
                },
                eColi: {
                    exigido: 10,
                    realizado: 12,
                    conforme: 12
                }
            },
            {
                periodo: "Junho",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 8,
                    conforme: 8
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Julho",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Agosto",
                turbidez: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                corAparente: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                cloroResidualLivre: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                coliformeTotal: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                eColi: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                }
            },
            {
                periodo: "Setembro",
                turbidez: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                corAparente: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                cloroResidualLivre: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                coliformeTotal: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                eColi: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                }
            }
        ]
    },
    {
        nome: "Oriental",
        municipio: "São Paulo",
        periodos: [
            {
                periodo: "Janeiro",
                turbidez: {
                    exigido: 10,
                    realizado: 10,
                    conforme: 10
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 10,
                    conforme: 10
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 10,
                    conforme: 10
                },
                eColi: {
                    exigido: 10,
                    realizado: 10,
                    conforme: 10
                }
            },
            {
                periodo: "Fevereiro",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Março",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 10
                },
                corAparente: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Abril",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 10
                },
                corAparente: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Maio",
                turbidez: {
                    exigido: 10,
                    realizado: 12,
                    conforme: 10
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 13,
                    conforme: 13
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 12,
                    conforme: 12
                },
                eColi: {
                    exigido: 10,
                    realizado: 12,
                    conforme: 12
                }
            },
            {
                periodo: "Junho",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 8,
                    conforme: 8
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Julho",
                turbidez: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                corAparente: {
                    exigido: 5,
                    realizado: 6,
                    conforme: 6
                },
                cloroResidualLivre: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                coliformeTotal: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                },
                eColi: {
                    exigido: 10,
                    realizado: 11,
                    conforme: 11
                }
            },
            {
                periodo: "Agosto",
                turbidez: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                corAparente: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                cloroResidualLivre: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                coliformeTotal: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                },
                eColi: {
                    exigido: 5,
                    realizado: 7,
                    conforme: 7
                }
            },
            {
                periodo: "Setembro",
                turbidez: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                corAparente: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                cloroResidualLivre: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                coliformeTotal: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                },
                eColi: {
                    exigido: 5,
                    realizado: 5,
                    conforme: 5
                }
            }
        ]
    },
    {
        nome: "Rio Claro",
        municipio: "São Paulo",
        periodos: [
            {
                periodo: "Janeiro",
                turbidez: {
                    exigido: 205,
                    realizado: 235,
                    conforme: 235
                },
                corAparente: {
                    exigido: 49,
                    realizado: 81,
                    conforme: 81
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 235,
                    conforme: 235
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 235,
                    conforme: 233
                },
                eColi: {
                    exigido: 205,
                    realizado: 235,
                    conforme: 235
                }
            },
            {
                periodo: "Fevereiro",
                turbidez: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                },
                corAparente: {
                    exigido: 49,
                    realizado: 70,
                    conforme: 70
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                },
                eColi: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                }
            },
            {
                periodo: "Março",
                turbidez: {
                    exigido: 205,
                    realizado: 213,
                    conforme: 213
                },
                corAparente: {
                    exigido: 49,
                    realizado: 67,
                    conforme: 67
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 213,
                    conforme: 213
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 213,
                    conforme: 213
                },
                eColi: {
                    exigido: 205,
                    realizado: 213,
                    conforme: 213
                }
            },
            {
                periodo: "Abril",
                turbidez: {
                    exigido: 205,
                    realizado: 215,
                    conforme: 215
                },
                corAparente: {
                    exigido: 49,
                    realizado: 71,
                    conforme: 71
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 215,
                    conforme: 215
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 215,
                    conforme: 214
                },
                eColi: {
                    exigido: 205,
                    realizado: 215,
                    conforme: 215
                }
            },
            {
                periodo: "Maio",
                turbidez: {
                    exigido: 205,
                    realizado: 212,
                    conforme: 212
                },
                corAparente: {
                    exigido: 49,
                    realizado: 68,
                    conforme: 68
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 212,
                    conforme: 212
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 212,
                    conforme: 212
                },
                eColi: {
                    exigido: 205,
                    realizado: 212,
                    conforme: 212
                }
            },
            {
                periodo: "Junho",
                turbidez: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                },
                corAparente: {
                    exigido: 49,
                    realizado: 195,
                    conforme: 195
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                },
                eColi: {
                    exigido: 205,
                    realizado: 210,
                    conforme: 210
                }
            },
            {
                periodo: "Julho",
                turbidez: {
                    exigido: 205,
                    realizado: 220,
                    conforme: 220
                },
                corAparente: {
                    exigido: 49,
                    realizado: 220,
                    conforme: 220
                },
                cloroResidualLivre: {
                    exigido: 205,
                    realizado: 220,
                    conforme: 220
                },
                coliformeTotal: {
                    exigido: 205,
                    realizado: 220,
                    conforme: 220
                },
                eColi: {
                    exigido: 205,
                    realizado: 220,
                    conforme: 220
                }
            },
            {
                periodo: "Agosto",
                turbidez: {
                    exigido: 148,
                    realizado: 219,
                    conforme: 219
                },
                corAparente: {
                    exigido: 148,
                    realizado: 219,
                    conforme: 219
                },
                cloroResidualLivre: {
                    exigido: 148,
                    realizado: 219,
                    conforme: 219
                },
                coliformeTotal: {
                    exigido: 148,
                    realizado: 219,
                    conforme: 219
                },
                eColi: {
                    exigido: 148,
                    realizado: 219,
                    conforme: 219
                }
            },
            {
                periodo: "Setembro",
                turbidez: {
                    exigido: 148,
                    realizado: 162,
                    conforme: 162
                },
                corAparente: {
                    exigido: 148,
                    realizado: 162,
                    conforme: 162
                },
                cloroResidualLivre: {
                    exigido: 148,
                    realizado: 162,
                    conforme: 162
                },
                coliformeTotal: {
                    exigido: 148,
                    realizado: 159,
                    conforme: 159
                },
                eColi: {
                    exigido: 148,
                    realizado: 159,
                    conforme: 159
                }
            }
        ]
    }

];