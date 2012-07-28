var TurretBaseData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAaVBMVEUAAABgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGAmfwAtLS1/MwAAAABbfwAAfw5lTn1DAAAAHXRSTlMAAAQJDRIWGx8kKC0xNjo/Q0hMUVVZXmJna3B0ebC9e7EAAAIRSURBVHhe7Zbd0psgEIYbEQRV8BdFo+br/V9kQ8VuLDCbdqYzPchzloP3mRUN+377n/nw4Xa7JSQ9Icnz95+mKcu4OOAZoxcHnieU52UlVW1RsipzzlJQoMNTXsimG/Q4GWOmUQ9do0rBiDNgeZIVsh2mZQMWoztV8tQa0HzKq2Yw2+/MupWCWgOSp0J2030LYHqVWwOSz1VvtjDzUCOG5/xCDbMLrCdfX86wgCGSJ1z2Lr9C3nIalEhB4OWTrOpMIA+GuZecWENYQItmgjgIXhSmLVkSExAuh3s4DwZtHyKcT2jRmg0TzB2MEBggkPdH4CQsoHkzubwvAINpchoUJKzsljcEi32GkIBk1XDmH0+cwDcMVUZCgpRL7QSPn8QEWvI0KBBqfEswKhER1O4MHwexQ5jqqMC8ThB9kQYTePy9ALgKkDMIchVgb2Hd990zoIcI38F+4BvW1XuNwS9xvxq+W5zF+5BC/4X9Fy4Phs3SVxmJ/RvNVbCHBHNbsCRyHyi9WTyB4xhgrCNX0s0+w+wbQLBZlr7KIpeiXQoaFYx1Dhe7P0JrrgYvD7cyslc8AbYXYLMtrwbII5sJdmt9GrYXAbobr4YZ3c74fkf6AdYwWu0PsYzQUNCOU6pOm+Uy/djX0JEwA2GiVK6lHTWtb+sqZ+T9npcy1xPPoliILNAT8aYKVRWJI10ZyvI/4sOHH3fXoDFC7N7NAAAAAElFTkSuQmCC";

var TurretBase = new Image();
TurretBase.src = TurretBaseData;


var TurretTopData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAYFBMVEUAAABgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGAZGRl/MwD/AAAAfw5bfwCAgIAAAAAarV5+AAAAGXRSTlMABAkNEhYbHyQoLTE2Oj9DSExRVVleYmdrbip78wAAAVFJREFUeF7tl1FvgyAURhWrIKXXVqv2qt3+/7+cNN9qiU3kPmzZEs/7OUGE5JL8IDupyl5QqdjPcm2e6DxLpX5ROqoAubJAId63VLf97UHf1mRlBZWXxAFU5koQyLSrOaB2OpMEDF2ZpyfMVzK/GcAnLAF8gnQTlwA2UQbPQJ9J5LAHPgJiEID9LwN7YA/sAV4j1tdI9GlNdAL6+0S0/+kJ9WEYogrMXgeB/ihE+x8zKMBHISIAHQVZAAvwMgp3BJaCYAEoyAOQx3H0gfvfCEzSAJAH1n8BgeUoCc+B9wH8uJP47eNaBAHZXQjvFbP8NqIEnyNGbF8ACHjg+6l7I2COHCYQ8DofzUYgUQdtqeb31GT1QW1OiMadm47XdM3ZmVzFzJiuujRt198W+q5tLpUr4W++FYx1J6peoZOzJurJgK0stAnRBbZP+uKSP7vk7HwBHvNtq3Ke1OgAAAAASUVORK5CYII=";

var TurretTop = new Image();
TurretTop.src = TurretTopData;


var BaseData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAA6RJREFUeF7tmsFuKjEMRVmz7gbE5q1gDUKwAMGXAX+ePqMaGTdObMeZDgikkWgJIff42s4EJpPP40PgQ+BDwEBgNpulsV8GOfqhYxedW59eXWEkn/h8PqexX3zNbhB0orGLzq2Prt8M4dXFIxA3BHzjK0aerxm1qF0QLX46nbo6RyR8E4QIAF7RUrdphaEG0CpeEn673ZL1ysFoAVGFQBfv+aCceKvo3PioVtwNQC/hHEYriC4AuPiIiNfm8LbocAB/IR7heCCEAvhL8V4IYQDGIN4DoQsAKV8vl0tarVbpeDw+3TzV8tvzurZ1hwCg0c8tFoXv9/tf4qG1egTiewDodru9A5U6RKl9NwOoWR/FbzabFA2AikeRFIKmKIYC4BHQiPc6ICe+BEFyQROAUvSv1+s939frtRj53IK16bBYLO7zo/2luWouCANAF54TfzqdxFMjrWg67uvrK3EI0jylghgOAMTDpBCdUt5TS3oAwHs4hEEB5Co/il8ul0/WL0XfWwOs0CQXuB1QAmCJPgAAcLnLKrI0ftQAwCHoEvqcQ2kBMloAKBgWCILh7/l8/ngODsEx8LoXwiAA4EMw/3e7XTocDo/ISn0YxEniKQgY01IvBgNgzX+sARwEQoHXUTyMGb0DrC2QntWDxblgtD+mxlsCoCLpc4AJaYCXVzy8b7AU8DiAblfp8xbB2jvD0H0ATmatA5FCrbvBUAC4E0QX4I1QrRu0tDctvEFSgOaapR2+FQDqAnpPUHLBSwKAdiUdhVkh9AYw6O0w5mQOgrQ7fAsAQJkXJA4hGoDmTKHriVApDagTOAhaD2Dj43EAfHaaTB6XdJ9Qsj/uOmGM+EOJ2rfDtVPhXErwjY8VwJP49P/xA4JDqEU/BIDGBdperR3How8MAIIEoOv3Ajh57csRrTg+LpfnvwBkHFCzPr0Ja0qBHIBcQfQAgLkn6d/johEu1QCN9cMB8FRohUDF3x3+A4JDQCEI2CI+rAZQm2qLYs0RPPoIQar2dBuOByil3O/igMh04AByDqAQrZHvCiCXDp6UKNWAnOUtke8OQHKDFUSuC3C7e4QPBkBygxWEFPEW8aoiCFvE2m5QU2xKIKQjsdr/tZ8rjaueBuH+OApAqVvUxGo3NhYoagCRLrAssOdYk3gOoDXvegrTzE3dpv65/LtAcIvP1YMeeamJoGcMrzGmyOcGR//2X1sEW8c1C+cTvAqIcOF0QoAw9qsrgM/kb0bgGwOgHxkjhAKjAAAAAElFTkSuQmCC";

var Base = new Image();
Base.src = BaseData;


var JeepData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAylJREFUeF7tmTtuwzAMQA2kW4HuuUAu0KVjgC4deoGiS5fuHbMlR+gxeoycoOiYNWNPoZqK6TK0JNKybCMBDXAwLFniM8Wfq8ouI2AEjIARMAJGwAgYASNgBIyAETACGgKuHiSJ5j25Y6S14fkol2ZhPqbkRmZdP2dxnFMCwjzrL5dLd42i/iKg/Pa+Skr1ceuorLaV43LmM7Z3ruoppT9CUQAASANgvV6fmXGOUovnhRsiuKYKQDu4+cIpS5CsACwAAKB4i1gt1IJ7QeWrh3ouES0UNQAY6Ny7P/9UOQqBK52yAlD45ee4efo+iQfwduPcgYRTphQFRAFw5fFeA2EwgJTSyWe1wp+H4wakA6AGEVMKLYUCcL/b6HgJQnEA2nOMR4ADACvwlpBQCiwB14FxowPQKuWPB/Pmr3UE4OLHNT4gBEBSalIAqDw4q91ud/IBPULWVQBAT40AOjFdADKmBcAZH/UIwBcHxVHgPgggVAw1YPoC6OMDAIAUBVIhUnSCCIAeAQrAH4dUJVg/RwB4dCQf4B0hD4F43+QLUh7gw2niPRgdhgMgyu/3e4eSSnURQCgMwqa/HisvHQi4FokCoTCHkUSyJJibBeDMCTabQsXBUjoQmI+IApB6CiRT5BZAQdBQKvmHYQAiyksQogAGpMIGgBRF01kAcYBFjkBhC5jUB4DTK+EEc4qhYChsUmopRA7zAejchDAITtP3CJrxqTAoha9QMSQpWSQPoIlQMBVOJEJnJXMNQZMHaIuhSTJBngr3qQV40wTmSgCuqhi6eADQKxtSDiMAajUXZQHYLIy1xHjXRwurVENkdB8QAgDFTXYrDFvmkZZYm8f3KIakKJBqi4lhMAagrfDYPwA1mBQAjCjKpmgoD5B6gepqkPbLkRat7zsKp5ojFFbhtrhWYT5ObQHUEniDo4UgtcoCAGjZrPUfdFyu4lkWgBEhCEBSHp4zAK3ymrmBkjoHWGyO6s9Q35BYcoNjv0sNgAyc5/f0/wbmXt/vJGcTObBjc+Zev92XZiMlFefvmnv9MXWzdxsBI2AEjIARMAJGwAgYASNgBIzAJAT+AJU8ZeWMw8ipAAAAAElFTkSuQmCC";

var Jeep = new Image();
Jeep.src = JeepData;


var BulletData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAEFJREFUKFNj+P//PwMIp6Wl/UfGMHG4ZENDw39kDFIMUgTWiSwxc+ZMOB8kh6EApBimCKcCmInEKYD5AKcjCXkTAJLnoCfo/8wNAAAAAElFTkSuQmCC";

var Bullet = new Image();
Bullet.src = BulletData;