# goit-markup-hw-08


.modal {
    padding: 40px;
    overflow: hidden;

    transition: transform $time-duration $timing-function;

    background-color: $primary-white-color;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
                0px 1px 1px rgba(0, 0, 0, 0.14), 
                0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;


    @media screen and (max-width: 1199px) {
        width: 450px;
    }
    @media screen and (min-width: $desctop) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%), scale(1);
    }
    .backdrop--is-hidden & {
        @media screen and (min-width: $desctop) {
            transform: translate(-50%, -50%), scale(1.5);
        }
    }

.modal {
    z-index: 5;
    transform: scale(1);
    transition: transform $time-duration $timing-function;

    padding: 40px;

    background-color: $primary-white-color;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
                0px 1px 1px rgba(0, 0, 0, 0.14), 
                0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;


    @media screen and (max-width: 1199px) {
        width: 450px;
    }
    @media screen and (min-width: $tablet) {
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
        transform: translate(-50%, -50%);
    }
    .backdrop--is-hidden & {
        transform: scale(1.5);

        @media screen and (min-width: $tablet) {
            transform: translate(-50%, -50%)
        }
    }
}